# Eccomerce-API 
this API impliments the CRUD for product inventory. It stores name and quantity of the product. it can create, delete, update and delete the product.
## how to setup on local machine
1. To use this repository your machine should have [node](https://nodejs.org/en/), npm, [monogodb](https://docs.mongodb.com/manual/installation/) and [git](https://git-scm.com/downloads). to check version exicute these.
```go
node --version
npm --version
git --version
```
2. now clone this repository
```go
git clone https://github.com/wizzenalum/Ecommerce-API.git
```
3. change directory to Ecomerce-API
```go
cd Ecommerce-API/
```

3. install dependencies
```go
npm i --save
```
4. first start the mongodb
```go
sudo systemctl start mongod
```
5. now just run the application
```go
npm start
```
