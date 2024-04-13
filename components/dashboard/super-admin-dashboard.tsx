import React from 'react';
import DashboardTotalCard from './dashboard-total-card';
import DashoardTotalRevenue from './dashboard-total-revenue';
import ActivitiesCard from './activities-card';
import { Button } from '../ui/button';
import {
	ContactRound,
	Landmark,
	ScanBarcode,
	User,
	UserPlusIcon,
	UserRound,
	Users,
} from 'lucide-react';

export default function SuperAdminDashboard() {
	return (
		<div className='flex flex-col md:flex-row h-full p-5 gap-5'>
			<div className=' flex flex-col w-full md:w-3/4 gap-5'>
				<div className='flex flex-col md:flex-row gap-5'>
					<DashboardTotalCard
						title={'Admin'}
						description={'Total number of admins'}
						amount={10}
					/>
					<DashboardTotalCard
						title={'Agent'}
						description={'Total number of Agent'}
						amount={500}
					/>
					<DashboardTotalCard
						title={'Vehicles'}
						description={'Total number of Vehicles'}
						amount={10000}
					/>
				</div>
				<div className='flex flex-col md:flex-row gap-5'>
					<DashoardTotalRevenue
						title={'Yearly'}
						description={'Total amount of yearly Revenue'}
						amount={'#19,333'}
					/>
					<DashoardTotalRevenue
						title={'Monthly'}
						description={'Total amount of monthly Revenue'}
						amount={'#99,848'}
					/>
					<DashoardTotalRevenue
						title={'Weekly'}
						description={'Total amount of weekly Revenue'}
						amount={'#88,490'}
					/>
					<DashoardTotalRevenue
						title={'Daily'}
						description={'Total amount of daily Revenue'}
						amount={'#475'}
					/>
				</div>
			</div>
			<div className=' hidden w-full h-[500px] overflow-y-scroll  md:flex flex-col  bg-secondary md:w-1/3  gap-3 p-3 '>
				<h3 className=''>Recent Activities</h3>
				<ActivitiesCard
					title={'Vehicle Registration'}
					description={'New Vehicle registered'}
					Date={'12/04/2023 | 12:23PM'}
					icons={<User />}
				/>
				<ActivitiesCard
					title={'Charge'}
					description={'Levy issued to Vehicle202'}
					Date={'12/04/2023 | 12:23PM'}
					icons={<Landmark />}
				/>
				<ActivitiesCard
					title={'Scan'}
					description={'New vehicle scanned'}
					Date={'12/04/2023 | 12:23PM'}
					icons={<ScanBarcode />}
				/>
				<ActivitiesCard
					title={'Agent Registration'}
					description={'New agent registered'}
					Date={'12/04/2023 | 12:23PM'}
					icons={<UserPlusIcon />}
				/>
				<ActivitiesCard
					title={'Admin Registration'}
					description={'New admin registered'}
					Date={'12/04/2023 | 12:23PM'}
					icons={<ContactRound />}
				/>
				<Button>View All</Button>
			</div>
		</div>
	);
}
