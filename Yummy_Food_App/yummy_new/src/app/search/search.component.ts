import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//AR--->READING FROM ROUTE
//R--->WRITING TO ROUTE

@Component({
  selector: 'app-search',  ///name of component in home.html
  standalone: false,
  
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    this.route.params.subscribe((params) => {
      if(params['searchTerm']) { ///property of route 
        this.searchTerm = params['searchTerm'];
      }});
    }

  search(): void {
    if(this.searchTerm) {
      this.router.navigateByUrl('/search/' + this.searchTerm);
    }
    
  }

}
