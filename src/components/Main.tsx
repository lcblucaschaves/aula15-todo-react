import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Tab} from 'react-bootstrap';
import NewestPane from './NewestPane';
import NavTabs from './NavTabs';
import { TodoItem, todoRepository } from '../model';

const Main: React.FC = () => {

    const [items, setItems] = useState<TodoItem[]>([]);

    function fetchItems() {
        todoRepository.list()
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(`Failed to fetch items: ${error}`)
            })
    }

    useEffect(fetchItems, []);

    return (
        <main className="pt-4 pb-5">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={10}> 
                        <Tab.Container defaultActiveKey="newest-pane">
                            <NavTabs />
                            <Tab.Content className="px-0 py-3 border border-top-0 bg-white rounded-bottom shadow">
                                {/*TODO: Panes*/}
                                <NewestPane items={items} />
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Main;
