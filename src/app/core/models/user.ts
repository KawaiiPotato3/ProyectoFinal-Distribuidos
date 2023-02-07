export class User {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  groups?: string[];
  access?: string;
  refresh?: string;
  roles?: string[];
  rols?: string[];
  constructor(
    id?: number,
  email?: string,
  first_name?: string,
  last_name?: string,
  groups?: string[],
  access?: string,
  refresh?: string,
  roles?: string[],
  rols?: string[],
  ){
    this.id = id;
    this.refresh = refresh;

  }
}
  