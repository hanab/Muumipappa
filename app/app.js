if (Meteor.isClient) {
	Template.body.helpers({
		tasks: [
		{ text: "This is task 1"},
		{ text: "this is task 2"},
		{ text: "task 3"}
		]
	});
}
