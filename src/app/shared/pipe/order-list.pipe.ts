import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args: string | null = null,sort:string = 'asc'): TrackModel[] {
    // toma el dato que sale de donde se utiliza el pipe y puedes transformarlo como quieras
    // console.log(value);
    // console.log(args);
    // console.log(sort);
    // return [];
    try{
      if(args === null){
        return value
      }else{
        const tmpList = value.sort((a,b) => {
          if(a[args] < b [args]){
            return -1;
          }else if(a[args] === b [args]){
            return 0;
          }else if(a[args] > b [args]){
            return 1;
          }
          return 1;
        })
        return (sort === 'asc') ? tmpList : tmpList.reverse();
      }
    }catch{
      console.log('Algo Paso');
      return value;
    }
  }

}
