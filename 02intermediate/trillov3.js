let myTodos = {
    day: 'Monday',
    meetings:0,
    meetingDone: 0,

    addMeeting : function (num) {
        this.meetings = this.meetings + num
        
    },

    summary: function () {
       return `You have ${this.meetings}`
        
    }
}

myTodos.addMeeting(7)
console.log(myTodos.summary());
