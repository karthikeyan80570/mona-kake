# Mona Kake (MK Bakings) - Landing Page Website

A high-converting, mobile-first landing page created for **Mona Kake / MK Bakings**, an artisanal home-based bakery located in Chennai, Tamil Nadu.

---

## 🌟 Key Highlights & Client Requirements Met

1. **No Cart & No Login Required:**
   - Designed strictly as a landing page without complex user accounts, cart abandonment friction, or payment gateways.
2. **Instant WhatsApp Ordering Redirection:**
   - Clicking **any item card** or the **"Order on WhatsApp"** button immediately opens WhatsApp with a pre-formatted order message containing the item name, portion/size, price, and inquiry for delivery in Chennai.
   - WhatsApp number: **+91 9080934681** (`https://wa.me/919080934681`)
3. **Interactive Portion & Weight Switcher:**
   - Customers can switch portions (e.g. `250g`, `1/2 kg`, `1 kg` for brownies/dream cakes or `Mini Jar`, `Regular` for jar cakes).
   - Displayed prices and WhatsApp order links dynamically update in real time!
4. **Complete Menu Extracted from Official PDF:**
   - **Brownies:** Classic, Triple Choco, Double Choco, Almond Choco, Choco Dip, Double Choco Dip (with custom topping notes).
   - **Brownie Slab Cake:** 250g, 1/2kg, 1kg with customizable celebration designs.
   - **Jar Cakes:** Brownie, Red Velvet, Choco Truffle, White Forest, Black Forest, Double Layer, Triple Layer, Nutella (Mini & Regular).
   - **5-in-1 Dream Cakes:** Brownie, Chocolate, White Chocolate, Rasamalai, Gulab Jamun, Multi Chocolate (crackable shell tins).
   - **Custom & Event Orders:** Theme celebration cakes, event bulk hampers, and return gifts.
5. **Brand Assets & Styling:**
   - Extracted high-resolution assets directly from `round MONA kake logo.pdf`, `MONA kake logo.pdf`, `contact sticker.pdf`, and `Mk bakings menu.pdf`.
   - Elegant bakery color palette: Cream/Vanilla background, Deep Cocoa text, Caramel Gold highlights, and WhatsApp Emerald CTAs.
   - Includes high-res product photos from the menu, image lightbox preview, and a direct download button for the official PDF menu.

---

## 📁 File Structure

```
mona-kake-landing-page/
├── index.html                 # Main landing page HTML5
├── open_website.bat           # 1-click preview shortcut
├── css/
│   └── styles.css             # Artisanal bakery styling & responsive layout
├── js/
│   └── app.js                 # Dynamic menu catalog & WhatsApp message generator
└── assets/
    ├── Mk_bakings_menu.pdf    # Official full menu PDF download
    └── images/
        ├── logo_circle_transparent.png  # High-res circular bakery logo
        ├── logo_round.png               # Badge logo
        ├── contact_sticker.png          # Contact badge sticker
        ├── brownies_display.png         # Brownies product photograph
        ├── brownie_slab.png             # Brownie slab cake photograph
        ├── dream_cake.png               # 5-in-1 dream cake photograph
        ├── jar_cakes_stack.png          # Jar cakes stack photograph
        ├── jar_cake_single.png          # Jar cake single photograph
        └── jar_cake_top.png             # Jar cake overhead photograph
```

---

## 🚀 How to View & Test

### Option 1: Double-Click
Double-click `open_website.bat` or `index.html` located in:
`C:\Users\karthikeyan.r\Desktop\Mona kake\website\index.html`

### Option 2: Local HTTP Server
Run in PowerShell / Terminal:
```powershell
python -m http.server 3000 --directory "C:\Users\karthikeyan.r\Desktop\Mona kake\website"
```
Then visit `http://localhost:3000` in any web browser.

---

## 🌐 Free / Simple Deployment Options

Because this website is built with clean HTML5, CSS3, and vanilla JavaScript:
- **Netlify / Vercel:** Drag and drop the `website` folder to deploy with a free custom SSL domain in seconds.
- **GitHub Pages:** Push to a GitHub repository and enable Pages in repository settings.
- **Hostinger / GoDaddy / cPanel:** Upload the files directly to `public_html`.
