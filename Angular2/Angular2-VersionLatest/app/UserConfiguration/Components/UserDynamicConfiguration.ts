import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, ComponentFactory, ComponentRef,Input,Compiler,Type,ChangeDetectorRef } from '@angular/core'


@Component({
  selector: 'dynamic-Component',
  template: `<div #target></div>`
})
export class DynamicComponent {
  @ViewChild('target', {read: ViewContainerRef}) target: ViewContainerRef;
  @Input() typeName: string;
  @Input() type: Type<Component>;
  //@Input() selectedTab= [];
  cmpRef: ComponentRef<Component>;
  private isViewInitialized:boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler,private cdref: ChangeDetectorRef) {}

  updateComponent() {
    if(!this.isViewInitialized) {
      return;
    }
    if(this.cmpRef) {
      // when the `type` input changes we destroy a previously 
      // created component before creating the new one
      this.cmpRef.destroy();
    }

    let factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
    this.cmpRef = this.target.createComponent(factory)
    // to access the created instance use
     //this.cmpRef.instance.inputs = this.selectedTab;
    // this.compRef.instance.someOutput.subscribe(val => doSomething());
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();  
    this.cdref.detectChanges();
  }

  ngOnDestroy() {
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }    
  }
}