const {createApp} = Vue;
createApp({
    data(){
        return {
            title: 'Lista della spesa per Pasquetta',
            lastQuestId: 0,
            quests: [],
            newQuest: ''
        }
    },
    methods:{
        AddQuests(){
            if(newQuest.value){
                const obj = { id: 'quest_' + (this.lastQuestId += 1), toDo: newQuest.value, done: 0 };
                this.quests.push(obj);
                this.newQuest = '';
            }
        },
        SetQuestResult(index,value){
            this.quests[index].done = value;
        },
        RemoveQuest(index){
            this.quests.splice(index,1);
        }
    }
}).mount("#app");