import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book.class';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {
  transform(books: any[], filterArgs: Book): any {
    let filteredBooks = books;
    if (!books || !filterArgs) {
      return books;
    }
    Object.keys(filterArgs).forEach((e, i) => {
      if (filterArgs[e]) {
        filteredBooks = filteredBooks.filter(book => {
          return book[e] && book[e].indexOf(filterArgs[e]) > -1;
        });
      }
    });
    return filteredBooks;
  }
}
