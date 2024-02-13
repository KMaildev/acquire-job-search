import { FlatList, Text } from 'react-native';
import JobItem from './JobItem';

function renderJobItem({ item }) {
    return <JobItem {...item} />;
}

function JobList({ jobs }) {
    return (
        <FlatList
            data={jobs}
            renderItem={renderJobItem}
            keyExtractor={item => item.id}
        />
    );
}

export default JobList;