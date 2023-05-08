const {createApp} = Vue;
import axios from 'axios';
createApp({
    data(){
        return {
            title: 'Lista della spesa per Pasquetta',
            lastQuestId: 0,
            quests: [],
            newQuest: '',
            urlApi: "./API/quests.php"
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