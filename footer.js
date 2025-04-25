const footerHTML = `
     <footer class="section-footer">
      <div class="footer-container container">
        <div class="content_1">
          <img src="./RA images/RA clothes 4.PNG" alt="">
          <p>
            Welcome to RA Clothes E-Commerce store,your ultimate destination for latest clothes
          </p>
          <img src="./RA images/cards.png" alt="">
        </div>
        <div class="content_2">
          <h4>SHOPPING</h4>
          <a href="#">Jeans</a>
          <a href="#">T-shirt</a>
          <a href="#">Shirt</a>
          <a href="#">Hoddies</a>
          <a href="#">Sales & Discount</a>
        </div>

        <div class="content_3">
          <h4>EXPERIENCE</h4>
          <a href="" target="_blank">Contact Us at aayush.chamoli_09_</a>
          <a href="" target="_blank" >Payment Method</a>
          <a href="" target="_blank">Delivery</a>
          <a href="" target="_blank">Return and Exchange</a>
        </div>

        <div class="content_4">
          <h4>NEWSLETTER</h4>
          <P>Be the first to know about new <br>arrivals ,sales & promos</P>
          <div class="f-mail">
            <input type="email" placeholder="aayuxhchamoli"/>
            <i class="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
      <div class="f-design">
        <div class="f-design-txt">
          <p>Design and Code by Ayush and Ritika</p>
        </div>
      </div>

     </footer> `;

const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);