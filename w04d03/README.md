# W04D03 - AJAX

### To Do
- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Use AJAX to retrieve data from a server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to a server
- [x] All without refreshing the browser

### AJAX
* Asynchronous Javascript And XML (AJAJ)
* created by Microsoft
* JavaScript making the HTTP requests for you
* XMLHTTPRequest Object (XHR)

* XML encodes data to be sent over the internet (JSON)
* eXtensible Markup Language

```xml
<user>
  <username>alice</username>
  <password>1234</password>
</user>
```

```json
{
  "username": "alice",
  "password": "1234"
}
```

```js
$.ajax({
  method: 'GET',
  url: '/urls',
  success: (data) => {},
  error: (err) => {}
})
```

### CDN
* Content Delivery Network



name=tasty+stuff&tagline=soooo+good&price=1.99&calories=500













