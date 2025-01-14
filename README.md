Phạm Thanh Tùng -22810310257
So sánh 
1. Mục đích sử dụng:
FlatList: Dùng để hiển thị danh sách dữ liệu tuyến tính (một mảng đơn), lý tưởng cho các trường hợp danh sách đơn giản, không có phân loại.
SectionList: Dùng để hiển thị danh sách có cấu trúc phân đoạn, tức là danh sách dữ liệu được nhóm thành các phần riêng biệt (sections), với mỗi phần có một tiêu đề riêng.
2. Cấu trúc dữ liệu:
FlatList: Dữ liệu đầu vào là một mảng đơn (array) với các mục dữ liệu không phân nhóm.
js
Copy code
const data = ['Item 1', 'Item 2', 'Item 3'];
SectionList: Dữ liệu đầu vào là một mảng các đối tượng, mỗi đối tượng có một tiêu đề (title) và danh sách các mục dữ liệu (data).
js
Copy code
const sections = [
  { title: 'Section 1', data: ['Item 1', 'Item 2'] },
  { title: 'Section 2', data: ['Item 3', 'Item 4'] }
];
3. Hiệu năng:
FlatList: Hiệu năng tốt với danh sách dài nhờ vào việc sử dụng các kỹ thuật tối ưu như lazy loading và rendering chỉ những phần tử hiển thị.
SectionList: Hiệu năng cũng tốt, nhưng có thể thấp hơn một chút so với FlatList khi bạn làm việc với các danh sách phân đoạn, vì cần phải xử lý thêm phần tiêu đề cho mỗi phân đoạn.
4. Tính dễ sử dụng:
FlatList: Dễ sử dụng cho các trường hợp đơn giản. Bạn chỉ cần cung cấp một mảng dữ liệu và một hàm render item.
js
Copy code
<FlatList
  data={data}
  renderItem={({ item }) => <Text>{item}</Text>}
/>
SectionList: Phức tạp hơn một chút vì bạn phải cung cấp một mảng các phần (sections) và renderItem cho mỗi phần. Tuy nhiên, nếu bạn cần hiển thị danh sách phân đoạn, SectionList sẽ làm việc rất hiệu quả.
js
Copy code
<SectionList
  sections={sections}
  renderItem={({ item }) => <Text>{item}</Text>}
  renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
/>
![Ảnh bài tập](IMG_0244.PNG)
