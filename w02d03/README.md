# W02D03 - Networking with TCP

### To Do
- [x] Discuss networking and the need for protocols
- [x] TCP introduction
- [x] TCP demo

### Networking
* computers/machines being able to communicate with one another

### Internet Protocol (IP)
* every computer gets a unique address
* IPv4: 192.168.8.8 127.0.0.1
* IPv6: 2001:db8:3333:4444:5555:6666:7777:8888
* street address
* port number (apt number)
* 65,535 ports to choose from
  * 80 HTTP
  * 443 HTTPS
  * 22 SSH
  * 5432 Postgres (database)
  * 3000 - 8000 dev ports

### Sending Messages
* broken into packets
* packet contains a header
  * who is the sender
  * who is the destination
* all packets are the same size

### TCP Transmission Control Protocol
* larger headers and more information
* requires a connection - triple handshake
* error recovery
* packets are reordered on arrival

### UDP User Datagram Protocol
* smaller header sizes
* connectionless protocol
* no error recovery
* packets arrive in any order


* clients => want something
* servers => have something

### Event-driven Programming
* program against events that may or may not occur
* when the event occurs, call my callback function


```js
connection.write('Move: up');
connection.write('Move: left');

connection.write('Name: ALI');
```


















