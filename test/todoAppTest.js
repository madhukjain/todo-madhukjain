const chai = require('chai');
const assert = chai.assert;
const TodoApp = require('../lib/TodoApp.js');

describe('todoApp',()=>{
  describe('accesing data',()=>{
    describe('#getUser',()=>{
      it('should get user of given name from users',()=>{
        let todoApp = new TodoApp();
        assert.deepEqual(todoApp.getUser('madhuri'),false);
      });
    });
  });
  describe('updating data',()=>{
    describe('#addUser',()=>{
      it('should add given user in users',()=>{
        let todoApp = new TodoApp();
        todoApp.addUser('madhuri','admin@123');
        let expected = {
          name : 'madhuri',
          password : 'admin@123',
          todos : {},
          todoID :1000
        }
        assert.deepEqual(todoApp.getUser('madhuri'),expected);
      });
    });
    describe('#addTodo',()=>{
      it('should add todo to given user',()=>{
        let todoApp = new TodoApp();
        todoApp.addUser('madhuri','admin@123');
        todoApp.addTodo('madhuri',"Today","Planning");
        let expected = {
          name : 'madhuri',
          password : 'admin@123',
          todos : {
            "1001":{
              title:"Today",
              description:"Planning",
              items :{},
              itemId :0,
              toDoId :1001
          }
        },
          todoID :1001
        }
        assert.deepEqual(todoApp.getUser('madhuri'),expected);
      });
    });
  });
})
