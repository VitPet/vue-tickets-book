new Vue ({
	el: '#app',
	data: {
		sum: 0,
		isActive: false,
		cart: [],
		ticketsType: {
			fan: {
				price: 1000,
				color: '#ffd24b',
				quantity: 60,
				label: 'fan'
			},
			regular: {
				price: 600,
				color: '#41B883',
				quantity: 100,
				label: 'regular'
			},vip: {
				price: 1500,
				color: 'red',
				quantity: 20,
				label: 'vip'
			}
		}
	},
	methods: {
		addToCart(type, quantity, color, price){
			--this.ticketsType[type].quantity;
			this.cart.push({
				type: type,
				quantity: --quantity,
				color: color,
				price: price
			});	
			this.sum += price;
		},
		removeTicket(i, key, price){
			this.cart.splice(i, 1);
			++this.ticketsType[key].quantity;
			this.sum -= price;
		}
	}
})