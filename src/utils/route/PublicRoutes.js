import JobPostedPage from '../../pages/JobPostedPage';
import HomePage from '../../pages/HomePage';
import CarPostedPage from '../../pages/CarPostedPage';
import RoomPostedPage from '../../pages/RoomPostedPage';
export default [
    {
		component: HomePage,
		path: '',
		title: '',
		exact: true
	},
	{
		component: JobPostedPage,
		path: 'dang-viec-lam',
		title: '',
		exact: true
	},
	{
		component: CarPostedPage,
		path: 'ban-xe',
		title: '',
		exact: true
	},
    {
		component: RoomPostedPage,
		path: 'cho-thue-phong',
		title: '',
		exact: true
	},
]