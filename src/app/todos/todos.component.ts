import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private todosService: TodosService
  ) {}

  data: Todo[] = [];
  filteredData: Todo[] = [];

  ngOnInit(): void {
    this.todosService.getTodos().subscribe((res) => {
      this.data = res;
      this.filteredData = this.data;
    });
  }

  editMode: boolean = false;
  selectedId: number = -1;

  edit(id: number, inpt: HTMLInputElement) {
    this.editMode = true;
    const editData = this.data.find((x) => x.id == id);
    this.selectedId = editData?.id || -1;
    inpt.value = editData?.title || '';
  }
  update(inpt: HTMLInputElement) {
    this.editMode = false;

    let editData = this.data.find((x) => x.id == this.selectedId) as Todo;
    editData.title = inpt.value;
    this.data = [...this.data];
    this.SetFilteredTodos();

    inpt.value = '';
  }

  add(inpt: HTMLInputElement) {
    const todo: Todo = {
      title: inpt.value,
      userId: 1,
      id: Math.random() * 100000000,
      completed: false,
    };
    this.data = [todo, ...this.data];
    // yeni bir item ekleyip referans günceller
    this.SetFilteredTodos();
    inpt.value = '';
  }

  delete(id: number) {
    this.editMode = false;

    const result = window.confirm('silmek istediğinize emin misiniz');

    if (result) {
      this.data = [...this.data.filter((x) => x.id != id)];
      this.SetFilteredTodos();
    }
  }

  search(searchText: string) {
    console.log('searchText', searchText);
    this.filteredData = this.data.filter((x) =>
      x.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
  }

  cancel(inpt: HTMLInputElement) {
    this.editMode = !this.editMode;
    inpt.value = '';
  }

  private SetFilteredTodos() {
    this.filteredData = [...this.data];
  }
}
