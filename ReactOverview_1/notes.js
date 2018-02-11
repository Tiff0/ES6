var Note = React.createClass({
    render: function() {
        return (
            <div className="note"> 
                {this.props.children}
            </div>
        );
    }
});

var NoteEditor = React.createClass({
    render: function() {
        return (
            <div className="note-editor"> Note Editor </div>
        );
    }
});

var NotesGrid = React.createClass({
    render: function() {
        return (
            <div className="note-grid"> 
                this.props.notes.map( function(note){
                    return <Note key={note.id} color={note.color}> {note.text}  <Note/>;
                }) 
            </div>
        );
    }
});

var NotesApp = React.createClass({
    getInitialState: function(){
        return {
            notes: [
                {
                    id: 0,
                    text: "Россияне стали избавляться от майнингового оборудования, о чём свидетельствуют данные сайта объявлений Avito, передают «Ведомости».",
                    color: "#FFD700"
                },
                {
                    id: 1,
                    text: "С начала года число размещённых на портале объявлений о продаже оборудования для добычи криптовалют увеличилось на 62 %. Сейчас их насчитывается 14 тыс., а в январе было 23 тыс.",
                    color: "#20B2AA"
                },
                {
                    id: 2,
                    text: "Однако такая компьютерная техника продаётся слабо. По данным Avito, из 23 тыс. объявлений в январе сделки прошли всего по 1525 объявлениям, то есть в 6,6 % случаев.",
                    color: "#90EE90"
                },
                {
                    id: 3,
                    text: "Тот факт, что россияне стали чаще продавать оборудование для майнинга криптовалют, в Avito объясняют снижением курса биткойна. Ещё 11 января за него давали $15 тыс., а в феврале стоимость падала ниже $6 тыс.",
                    color: "#87CEFA"
                },
                {
                    id: 4,
                    text: "По словам представителя Avito, бывшие в употреблении комплекты для добычи криптовалют предлагаются в среднем по цене 170–175 тыс. рублей, однако в январе реальные пользователи покупали оборудование по цене около 126 тыс. рублей.",
                    color: "#5F9EA0"
                },
                {
                    id: 5,
                    text: "Представитель «Юлы» говорит, что средняя цена размещённого в сервисе предложения по купле-продаже майнингового оборудования в январе росла и достигла 214 тыс. рублей, но число сделок уменьшается.",
                    color: "#00FA9A"
                }
            ];
        };
    },

    render: function (){
        return (
            <div className="notes-app">
            NotesApp
            <NoteEditor />
            <NotesGrid notes={this.state.notes} />
            </div>
        );
    }    
});

ReactDOM.render(
    <NotesApp />,
    document.getElementById('content')
);