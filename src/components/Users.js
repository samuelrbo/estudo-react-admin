import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
import MyUrlField from './../fields/MyUrlField';

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField srouce="email" />
      <TextField source="phone" />
      <UrlField source="website" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
