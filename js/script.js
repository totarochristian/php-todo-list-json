const {createApp} = Vue;
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
                if(this.quests)
                    this.quests.push(obj);
                else
                    this.quests = [ obj ];
                this.newQuest = '';
                this.UpdateFile();
            }
        },
        SetQuestResult(index,value){
            this.quests[index].done = value;
            this.UpdateFile();
        },
        RemoveQuest(index){
            this.quests.splice(index,1);
            this.UpdateFile();
        },
        LoadData(){
            axios.get(this.urlApi).then((res) => { this.quests = res.data; });
        },
        UpdateFile(){
            axios.post(this.urlApi,{"quests": this.quests},{headers: {'Content-Type': 'multipart/form-data'}});
        }
    },
    mounted(){
        this.LoadData();
    }
}).mount("#app");