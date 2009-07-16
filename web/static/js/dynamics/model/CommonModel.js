/*
 * Abstract common model for dynamics inheritance
 */

/**
 * CommonModel is an abstract base class.
 * @constructor
 */
var CommonModel = function() {};

/**
 * Initialize the common components of all model classes.
 * <p> 
 * Every subclass should call this method.
 */
CommonModel.prototype.initialize = function() {
  this.editListeners = [];
  this.deleteListeners = [];
  
  var defaultData = {
    id: null  
  };
  
  this.currentData = defaultData;
  this.persistedData = defaultData;
};


/**
 * Reloads the object's and all its children's data from the server.
 */
CommonModel.prototype.reload = function() {
  throw "Abstract method called: reload";
};

/**
 * Set the object's persisted and current data.
 */
CommonModel.prototype.setData = function(newData) {  
  this.currentData = newData;
  this.persistedData = newData;
  this.callEditListeners();
};

/**
 * Every model instance should have an unique id.
 */
CommonModel.prototype.getId = function() {
  return this.currentData.id;
};

/**
 * Add an edit listener.
 * 
 * @param {function} listener the listener to be added
 * @see #callEditListeners
 */
CommonModel.prototype.addEditListener = function(listener) {
	this.editListeners.push(listener);
};

/**
 * Remove an edit listener
 * 
 * @param {function} listener the listener to remove
 */
CommonModel.prototype.removeEditListener = function(listener) {
  ArrayUtils.remove(this.editListeners, listener);
};

/**
 * Call the object's edit listeners.
 * <p>
 * Edit listeners are called, when object data changes.
 * @see #addEditListener
 */
CommonModel.prototype.callEditListeners = function(event) {
  for (var i = 0; i < this.editListeners.length; i++) {
    this.editListeners[i](event);
  }
};


/**
 * Add a delete listener.
 * 
 * @see #callDeleteListeners
 */
CommonModel.prototype.addDeleteListener = function(listener) {
	this.deleteListeners.push(listener);
};

/**
 * Remove a delete listener.
 * 
 * @param {function} listener the listener to remove
 */
CommonModel.prototype.removeDeleteListener = function(listener) {
  ArrayUtils.remove(this.deleteListeners, listener);
};

/**
 * Call the object's delete listeners.
 * <p>
 * Delete listeners are called, when object is deleted.
 * @see #addDeleteListener
 */
CommonModel.prototype.callDeleteListeners = function(event) {
  for (var i = 0; i < this.deleteListeners.length; i++) {
    this.deleteListeners[i](event);
  }
};


/**
 * Commit the changes to the object.
 * <p>
 * Loops through the fields and submits the changed ones.
 * Then reloads the data from the server.
 */
CommonModel.prototype.commit = function() {
  //TODO: implement  
};

/**
 * An internal abstract method to submit the AJAX request.
 * <p>
 * The method is called whenever changes are committed.
 * 
 * @see #commit
 */
CommonModel.prototype._saveData = function() {
  throw "Abstract method called: _saveData";
};


/**
 * Rollback the changes to the object.
 * <p>
 * Cancels any changes made to the object and reverts
 * back to persisted data.
 */
CommonModel.prototype.rollback = function() {
  //TODO: implement
};