import { EventEmitter } from "events";

import actionTypes from "../actions/actionTypes";
import { POINT_CONVERSION_UNCOMPRESSED } from "constants";
import dispatcher from "../appDispatcher";

const CHANGE_EVENT = "change";
let _courses = [];

class CourseStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	getCourses() {
		return _courses;
	}

	getCourseBySlug(slug) {
		return _courses.find((c) => c.slug === slug);
	}
}

const store = new CourseStore();

dispatcher.register((action) => {
	// of action dispatched...
	switch (action.type) {
		case actionTypes.CREATE_COURSE:
			_courses.push(action.course);
			store.emitChange();
			break;
		case actionTypes.GET_COURSES:
			_courses = action.courses;
			store.emitChange();
			break;
		default:
	}
});

export default store;
