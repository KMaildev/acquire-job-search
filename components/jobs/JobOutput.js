import { StyleSheet, View } from 'react-native';
import JobList from './JobList';
import { GlobalStyles } from '../../constants/styles';


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'Buy Laptop',
        amount: 100.4,
        date: new Date('2023-12-19'),
    },

    {
        id: 'e2',
        description: 'Taxi',
        amount: 200.4,
        date: new Date('2023-12-19'),
    },

    {
        id: 'e3',
        description: 'Buy Printer',
        amount: 595.4,
        date: new Date('2023-12-19'),
    },

    {
        id: 'e4',
        description: 'Coffee',
        amount: 20.4,
        date: new Date('2023-12-19'),
    },

    {
        id: 'e5',
        description: 'Food',
        amount: 595.4,
        date: new Date('2023-12-19'),
    },

    {
        id: 'e6',
        description: 'A book',
        amount: 595.4,
        date: new Date('2023-12-19'),
    },

    {
        id: 'e9',
        description: 'A book',
        amount: 595.4,
        date: new Date('2023-12-19'),
    },

    {
        id: 'e10',
        description: 'A book',
        amount: 595.4,
        date: new Date('2023-12-19'),
    },


    {
        id: '11',
        description: 'A book',
        amount: 595.4,
        date: new Date('2023-12-19'),
    },
];

function JobOutput({ expenses, expensePeriod }) {
    return (
        <View style={styles.container}>
            <JobList jobs={DUMMY_EXPENSES} />
        </View>
    );
}

export default JobOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 24,
        paddingBottom: 10,
        backgroundColor: GlobalStyles.colors.primary,
    }
});