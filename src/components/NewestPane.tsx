import { ListGroup, Tab } from "react-bootstrap";
import { TodoItem } from "../model"
import ListItem from "./ListItem";

interface NewestPaneProps {
    items: TodoItem[]
}

const NewestPane: React.FC<NewestPaneProps> = ({items}) => {

    const sortedItems = [... items].sort((a, b) => {
        const dateA = a.deadline ? new Date(a.deadline).getTime() : 0
        const dateB = b.deadline ? new Date(b.deadline).getTime() : 0

        return dateB - dateA
    })

    return (
        <Tab.Pane eventKey="newest-pane" id="newest-pane">
            <ListGroup id="newest-content" variant="flush">
                {sortedItems.map((item) => (
                    <ListItem
                        key={item.id}
                        item={item}    
                        isChecked={false}
                        onCheck={() => {}}
                    />
                ))}
            </ListGroup>
        </Tab.Pane>
    );
}

export default NewestPane                 