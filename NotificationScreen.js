import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import NotificationItem from './layout';

const notifications = [
  {
    id: '1',
    icon: require('./assets/check-circle.png'),
    title: 'Bước 1: Xác định nhu cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    date: '20/08/2020, 06:00',
  },
  {
    id: '2',
    icon: require('./assets/users.png'),
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '3',
    icon: require('./assets/users.png'),
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '4',
    icon: require('./assets/users.png'),
    title: 'Khách hàng được thêm bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '5',
    icon: require('./assets/check-circle.png'),
    title: 'Công việc sắp đến hạn trong hôm nay',
    description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '6',
    icon: require('./assets/check-circle.png'),
    title: 'Công việc đã quá hạn',
    description: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    date: '20/08/2020, 06:00',
  },
];

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <NotificationItem
            icon={item.icon}
            title={item.title}
            description={item.description}
            date={item.date}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 16,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default NotificationScreen;
