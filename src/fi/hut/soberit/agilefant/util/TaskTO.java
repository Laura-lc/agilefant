package fi.hut.soberit.agilefant.util;

import java.util.ArrayList;
import java.util.Collection;

import fi.hut.soberit.agilefant.model.Task;
import fi.hut.soberit.agilefant.model.User;

public class TaskTO extends Task {
   
    // Helper fields
    private Collection<ResponsibleContainer> userData = new ArrayList<ResponsibleContainer>();
    
    public TaskTO(Task task) {
        this.setId(task.getId());
        this.setName(task.getName());
        this.setDescription(task.getDescription());
        this.setIteration(task.getIteration());
        this.setStory(task.getStory());
        this.setState(task.getState());
        this.setPriority(task.getPriority());
        this.setTodos(task.getTodos());
        this.setEffortLeft(task.getEffortLeft());
        this.setOriginalEstimate(task.getOriginalEstimate());
        this.setHistoryEntries(task.getHistoryEntries());
        this.setResponsibles(task.getResponsibles());
        
        responsiblesToUserData();
    }
    
    // TODO: 090603 Reko: Set project assignments 
    private void responsiblesToUserData() {
        for (User user : this.getResponsibles()) {
            userData.add(new ResponsibleContainer(user, true));
        }
    }
    
    public void setUserData(Collection<ResponsibleContainer> userData) {
        this.userData = userData;
    }

    public Collection<ResponsibleContainer> getUserData() {
        return userData;
    }
}
