# 餐廳美食清單
透過 Express x Mongo DB 建立的餐廳美食清單
![](/restaurantListCRUD.png)
## 功能描述
- 使用者可以透過搜尋欄位尋找餐廳
- 使用者可以新增一家餐廳
- 使用者可以瀏覽一家餐廳的詳細資訊
- 使用者可以瀏覽全部所有餐廳
- 使用者可以修改一家餐廳的資訊
- 使用者可以刪除一家餐廳
### 環境建置與需求
* Node.js: v10.15.0
* npm: 6.4.1
* Nodemon: 2.0.4
* express: 4.17.1
* express-handlebars: 5.1.0
* body-parser: 1.19.0
* mongoDB: 4.2.10
* mongoose: 5.10.9
* Robo 3T: 1.4.1
### 安裝與執行步驟
開啟終端機 (Terminal)，clone 此專案至本機(Local)電腦
```
$ git clone https://github.com/Anderson-Chiang/restaurant-list.git
```

進入專案資料夾
```
$ cd restaurant-list
```

安裝 npm 套件
```
$ npm install
```

MongoDB 產生預設使用者及餐廳資料 (匯入 Seed data)
```
$ npm run seed
```

安裝 nodemon 套件，並啟動伺服器，執行程式
```
$ npm run dev
```

當 Terminal 出現以下字樣，表示伺服器已連結成功
```
The server is listening on http://localhost:3000
```

在瀏覽器輸入網址，並進入網站
```
http://localhost:3000
```