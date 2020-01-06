import _ from 'lodash';

const arr = [];
const obj = {a: 1, b: 2, c: 3};

_.each(obj, i => {
	arr.push(i);
})

// [1, 2, 3];
console.log('arr', arr);

/*-----------------------------*/

const arr2 = _.map([{id: 1, name: 'a'}, {id: 2, name: 'b'}], 'id');

// [1, 2];
console.log('arr2', arr2);

/*-----------------------------*/

const obj2 = _.find([{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'}], {id: 2});

// {id: 2, name: 3};
console.log('obj2', obj2);

/*-----------------------------*/

const arr3 = _.filter([{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'a'}], {name: 'a'});

// [{id: 1, name: 'a'}, {id: 3, name: 'a'}];
console.log('arr3', arr3);

/*-----------------------------*/

const arr4 = _.without([1, 2, 3, 4, 5], 2, 3);

// [1, 4, 5];
console.log('arr4', arr4);

/*-----------------------------*/

const arr5 = [{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'}];

const arr6 = _.reject(arr4, {name: 'b'});

// [{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'}];
console.log('arr5', arr5);

// [{id: 1, name: 'a'}, {id: 3, name: 'c'}];
console.log('arr6', arr6);

/*-----------------------------*/

const arr7 = [{name: 'Roman', likes: 4}, {name: 'Elena', likes: 5}, {name: 'Alex', likes: 2}];

const arr8 = _.sortBy(arr6, 'likes');

// [{name: 'Roman', likes: 4}, {name: 'Elena', likes: 5}, {name: 'Alex', likes: 2}];
console.log('arr7', arr7);

// [{name: 'Alex', likes: 2}, {name: 'Roman', likes: 4}, {name: 'Elena', likes: 5}];
console.log('arr8', arr8);

/*-----------------------------*/

const arr9 = [{name: 'Roman', isActive: 'true'}, {name: 'Alex', isActive: 'false'}, {name: 'Egor', isActive: 'true'}];

const obj3 = _.groupBy(arr9, 'isActive');

// [{name: 'Roman', isActive: 'true'}, {name: 'Alex', isActive: 'false'}, {name: 'Egor', isActive: 'true'}];
console.log('arr9', arr9);

/*

	{
		false: [{name: 'Alex', isActive: 'false'}],
		true: [{name: 'Roman', isActive: 'true'}, {name: 'Egor', isActive: 'true'}]
	};

*/

console.log('obj3', obj3);

/*-----------------------------*/

const obj4 = _.pick({ 'a': 1, 'b': 2, 'c': 3 }, ['b', 'c']);

// {b: 2, c: 3};
console.log('obj5', obj4);
