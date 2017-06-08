db = connect("localhost:27017/testAPI");
db.computers.insertMany([
    { name : 'Computer1', price : 1200, available : true, dateCreated : 'Mon Oct 03 2016 15:22:08 GMT+0200 (CEST)' },
    { name : 'Computer2', price : 1300, available : false, dateCreated : 'Mon Oct 03 2016 15:22:08 GMT+0200 (CEST)' }
]);
