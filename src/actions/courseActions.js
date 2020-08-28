import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

/** action creator fn dispatches action object */
export function saveCourse(course) {
	return courseApi.saveCourse(course).then((savedCourse) => {
		dispatcher.dispatch({
			actionType: actionTypes.CREATE_COURSE,
			course: savedCourse,
		});
	});
}

export function getCourses() {
	return courseApi.getCourses().then((_courses) => {
		dispatcher.dispatch({
			actionType: actionTypes.GET_COURSES,
			courses: _courses,
		});
	});
}

/**
 * save course action calls api
 * sets state
 * emits latest
 * in ngxs the store (add to store, emit) is handled for us
 * in flux, we maintain it and emit manually
 * we set data
 * we define getter methods
 * i like the control actually!
 *
 */
