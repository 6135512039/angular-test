import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  bookForm: FormGroup;


  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private CrudService: CrudService
  ) {
    this.bookForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: ['']
    })
   }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.CrudService.AddBook(this.bookForm.value)
    .subscribe(() => {
      console.log("Data Added Successfully");
      this.ngZone.run(() => this.router.navigateByUrl('books-list'))
    }, (err) => {
      console.log(err);
    })
  }

}
