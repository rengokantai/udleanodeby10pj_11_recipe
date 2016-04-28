#### udleanodeby10pj_11_recipe
######2
postgresql. step:
```
create database recipebookdb
create table recipes
```
then create 3 columns
```
id serial primary key
name char 255
ingredients text
directions text
```

######3
install
```
npm install body-parser consolidate dust dustjs-helpers dustjs-linkedin express pg --save
```
if use non jade and ejs, use consolidate
```
app.engine('dust',cons.dust);
app.set('view engine','dust');
```
