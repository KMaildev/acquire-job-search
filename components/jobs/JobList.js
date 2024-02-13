import { FlatList, Text } from 'react-native';
import JobItem from './JobItem';

function renderExpenseItem(itemData) {
    return <JobItem {...itemData.item} />;
}

function JobList({ jobs }) {
    return (
        <FlatList
            data={jobs}
            renderItem={renderExpenseItem}
            keyExtractor={(item) => item.id}
        />
    )
}

export default JobList;