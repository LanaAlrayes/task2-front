"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference lib="es2015" />
var Contact = /** @class */ (function () {
    function Contact(name, email, phone, group) {
        this.group = group;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    return Contact;
}());
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        this.contacts = [];
    }
    AddressBook.prototype.addContact = function (contact) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(contact.email)) {
            throw new Error("Invalid email format");
        }
        if (!contact.name || contact.name.trim() === "") {
            throw new Error("Name cannot be empty");
        }
        this.contacts.push(contact);
    };
    AddressBook.prototype.findContactByName = function (name) {
        return this.contacts.find(function (contact) { return contact.name === name; });
    };
    AddressBook.prototype.filterByGroup = function (group) {
        return this.contacts.filter(function (contact) { return contact.group === group; });
    };
    AddressBook.prototype.sortByName = function () {
        this.contacts.sort(function (a, b) { return a.name.localeCompare(b.name); });
    };
    AddressBook.prototype.searchContacts = function (searchTerm) {
        var normalizedSerchterm = searchTerm.toLowerCase();
        return this.contacts.filter(function (contact) {
            return contact.name.toLowerCase().includes(normalizedSerchterm);
        });
    };
    AddressBook.prototype.printContacts = function () {
        for (var _i = 0, _a = this.contacts; _i < _a.length; _i++) {
            var contact = _a[_i];
            console.log("Name: ".concat(contact.name));
            console.log("Email: ".concat(contact.email));
            console.log("Phone: ".concat(contact.phone));
            console.log("-----");
        }
    };
    return AddressBook;
}());
var addressBook = new AddressBook();
var contact1 = new Contact("John Doe", "johndoe@example.com", "123-456-7890");
var contact2 = new Contact("Alice Smith", "alice.smith@invalid", "456-789-0123");
var contact3 = new Contact("", "valid@email.com", "789-012-3456");
addressBook.addContact(contact1);
try {
    addressBook.addContact(contact2);
    addressBook.addContact(contact3);
}
catch (error) {
    console.error("Error adding contact:", error.Message);
}
console.log("Contacts:");
addressBook.printContacts();
var searchResults = addressBook.searchContacts("john");
console.log("Search results (name containing 'john'):");
searchResults.forEach(function (contact) { return console.log("  - ".concat(contact.name)); });
