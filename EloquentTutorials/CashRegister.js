function StaffMember(name, discountPercent){
	this.name = name;
	this.discountPercent = discountPercent;
}

var cashRegister = {
	total:0,
	lastTransactionAmount: 0,

	add: function(itemCost){
		this.total += (itemCost || 0);
		this.lastTransactionAmount = itemCost;
	},

	scan: function(item, quanity){
		switch(item){
			case "eggs":
				this.add(0.98 * quanity);
				break;

			case "milk":
				this.add(1.23 * quanity);
				break;

			case "magazine":
				this.add(4.99 * quanity);
				break;

			case "chocolate":
				this.add(0.45 * quanity);
				break;
		}
		return true;
	},

	voidLastTransaction: function(){
		this.total -= this.lastTransactionAmount;
		this.lastTransactionAmount = 0;
	},

	//Create a new method applyStaffDiscount here
	applyStaffDiscount: function(employee){
		this.total -= this.total * (employee / 100);
	}

};
var sally = new StaffMember("Sally", 5);
var bob = new StaffMember("Bob", 10);
var me = new StaffMember("Alex", 20);
//cashRegister.total = 2.99;

//Call the add method for out items
//cashRegister.add(0.98);
//cashRegister.add(1.23);
//cashRegister.add(4.99);
//cashRegister.add(0.45);

//Scan 2 eggs and 3 magazines
cashRegister.scan("eggs", 1);
cashRegister.scan("milk", 1);
cashRegister.scan("magazine", 3);
//cashRegister.scan("chocolate", 4);

//Void the last transaction and then add 3 instead
//cashRegister.voidLastTransaction();
//cashRegister.scan("chocolate", 3);
cashRegister.applyStaffDiscount(me.discountPercent);

//Show the total bill.
console.log("Your bill is " + cashRegister.total.toFixed(2));