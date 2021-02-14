// Name- Karan Bagga
// Student Number- 200449124
// Assignment1

//Javascript file

const coffee1 = {

    customer_name: ['karan','bagga'],
    drink_type: 'coffee',
    drink_size: 'tall',
    drizzle: 'yes',
    whipped_cream: 'yes',
    sweetener: 'yes',
    cold_foam: 'no',
    dairy: 'milk',
    customerOrder: function () {

        if (coffee1.drizzle === 'yes')
        {
            coffee1.drizzle = ',with drizzle ';
        }
        else
        {
            coffee1.drizzle = '';
        }

        if (coffee1.whipped_cream === 'yes')
        {
            coffee1.whipped_cream = ',with whipped cream ';
        }
        else
        {
            coffee1.whipped_cream = '';
        }

        if (coffee1.sweetener === 'yes')
        {
            coffee1.sweetener = ',with sweetener ';
        }
        else
        {
            coffee1.sweetener = '';
        }
        
        if (coffee1.cold_foam === 'yes')
        {
            coffee1.cold_foam = ',with cold foam ';
        }
        else
        {
            coffee1.cold_foam = '';
        }


        alert(coffee1.customer_name[0] + ' ordered ' + coffee1.drink_size + " " + coffee1.drink_type + " " + coffee1.cold_foam + " " + coffee1.drizzle + " " + coffee1.sweetener + " " + coffee1.whipped_cream + " and " + coffee1.dairy);

    },
    
    };

const coffee2 = {

        customer_name: ['Sachin', 'Sachin'],
        drink_type: 'latte',
        drink_size: 'small',
        drizzle: 'no',
        whipped_cream: 'no',
        sweetener: 'no',
        cold_foam: 'yes',
        dairy: 'cream',
    customerOrder: function () {

        if (coffee2.drizzle === 'yes') {
            coffee2.drizzle = ',with drizzle ';
        }
        else {
            coffee2.drizzle = '';
        }

        if (coffee2.whipped_cream === 'yes') {
            coffee2.whipped_cream = ',with whipped cream ';
        }
        else {
            coffee2.whipped_cream = '';
        }

        if (coffee2.sweetener === 'yes') {
            coffee2.sweetener = ',with sweetener ';
        }
        else {
            coffee2.sweetener = '';
        }

        if (coffee2.cold_foam === 'yes') {
            coffee2.cold_foam = ',with cold foam ';
        }
        else {
            coffee2.cold_foam = '';
        }


        alert(coffee2.customer_name[0] + ' ordered ' + coffee2.drink_size + " " + coffee2.drink_type + " " + coffee2.cold_foam + " " + coffee2.drizzle + " " + coffee2.sweetener + " " + coffee2.whipped_cream + " and " + coffee2.dairy);

    },
    
};


