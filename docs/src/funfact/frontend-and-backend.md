---
outline: deep
---

# Front-end กับ Back-end ต่างกันยังไง..?

หลายๆ คนที่เพิ่งจะเข้าวงการ Web Developer แรกๆ ก็คงจะงงๆ กับคำศัพท์ในวงการมากมาย (ซึ่งผมก็เป็นหนึ่งในนั้น) เพราะฉะนั้นวันนี้เราจะมาเริ่มกันด้วยคำศัพท์พื้นฐานสุดๆ อย่าง **Front-end** และ **Back-end** กัน!

## Front-end Developer คืออะไร..?

**Front-end Developer** เป็นการพัฒนาในฝั่งหน้าบ้านของ Application คิดสภาพว่าเรากำลังเปิดร้านอาหารร้านหนึ่ง สำหรับ Front-end แล้วมันก็คือฝั่งของการบริการลูกค้า คอยเสิร์ฟอาหารและเครื่องดื่ม และคอยรับคำสั่งจากลูกค้าตามที่ลูกค้าต้องการอยู่ตลอดเวลา

ดังนั้นฝั่ง Front-end ก็คือฝั่งที่อยู่ใกล้ชิดกับลูกค้ามากที่สุด จึงต้องมีความสะดวกและเข้าถึงง่าย และเร็วอีกด้วย ลองสมมุติว่าร้านอาหารมีพนักงานบริการที่บริการลูกค้าไม่ดี แถมช้าอีก คิดว่าลูกค้าจะพอใจไหมล่ะ?

### เครื่องมือพัฒนาสำหรับชาว Front-end Developer

ก็จะมีเครื่องมือมากมายให้เลือกใช้ เช่น
- React.js
- Vue.js
- Angular.js

## Back-end Developer คืออะไร..?

Back-end Developer จะเป็นการพัฒนาในฝั่งของหลังบ้าน สมมุติเหมือนเดิมว่าเป็นร้านอาหารแห่งหนึ่ง ถ้าเรามีฝั่งหน้าบ้านหรือพนักงานที่คอยให้บริการลูกค้าแล้ว แต่ไม่มีฝั่งหลังบ้านที่เป็นคนที่คอยผลิตอาหารหรือเครื่องดื่มเพื่อให้ฝั่งหน้าบ้านคอยนำไปเสิร์ฟ คำถามคือแล้วจะมีฝั่งหน้าบ้านไปทำไมกัน ในเมื่อบริการลูกค้าแล้วแต่ดันไม่มีของมาให้เสิร์ฟ?

แต่จริงๆ แล้วเว็บบางเว็บก็ไม่จำเป็นจะต้องมีฝั่ง Back-end ก็ได้ หากไม่ได้มีระบบที่มีความซับซ้อนมาก เช่น ต้องการให้เว็บแสดงเนื้อหาเท่านั้น ก็อาจจะตัดฝั่ง Back-end ทิ้งไปได้เลย แต่ถ้าเป็นเว็บที่ต้องคอยให้บริการลูกค้า เช่น เว็บ E-Commerce ที่จะต้องมีบริการแสดงสินค้า บริการตะกล้าสินค้า และบริการสั่งซื้อสินค้า ซึ่งบริการเหล่านี้จะต้องเพิ่งฝั่ง Back-end อย่างหลีกเลี่ยงไม่ได้

ฝั่ง Back-end จะไปยุ่งเกี่ยวกับงานด้าน Database และการทำ APIs เพื่อให้ฝั่ง Front-end นำไปเชื่อมกับฝั่งหน้าบ้าน ก็เหมือนกับ การปรุงอาหารเพื่อให้เด็กเสิร์ฟนำไปเสิร์ฟนั่นเอง

### เครื่องมือพัฒนาสำหรับชาว Back-end Developer

สำหรับฝั่ง Back-end จะมีเครื่องมือที่จะต้องใช้อยู่ค่อนข้างเยอะ แต่โดยคร่าวๆ แล้วก็จะมีดังนี้

- Express.js (สำหรับทำ APIs)
- DBMS เช่น MySQL, PostgreSQL (สำหรับการจัดการฐานข้อมูล)

## สรุป

ทั้ง Front-end และ Back-end ก็มีส่วนสำคัญในการให้บริการ Application โดย Front-end จะเป็นงานฝั่งหน้าบ้านที่คอยให้บริการกับผู้ใช้โดยตรง ส่วน Back-end จะเป็นฝั่งหลังบ้านที่คอยดูแลระบบต่างๆ เช่น ฐานข้อมูล และการจัดการข้อมูล ในบางเว็บอาจจะมีแค่ฝั่ง Front-end ก็ได้ หรือจะมีทั้ง Front-end และ Back-end ก็ได้เช่นกัน