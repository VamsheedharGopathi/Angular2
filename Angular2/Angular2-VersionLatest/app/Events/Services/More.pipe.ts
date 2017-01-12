import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'MoreStringPipe'
})
export class MorePipe implements PipeTransform {
    transform(value: string): string {
        return value.length > 95 ? value.slice(0, 95) + '...' : value;
    }
}