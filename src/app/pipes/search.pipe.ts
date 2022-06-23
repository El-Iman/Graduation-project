import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(blogs:any , word:string): unknown {
    return blogs.filter((blogs)=>{
      return blogs.title.toLowerCase().includes(word.toLowerCase()) 
      ||blogs.describtion.toLowerCase().includes(word.toLowerCase())
    })
  }

}
