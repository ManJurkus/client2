import { Outlet } from 'react-router-dom';
import { SideBar } from '../components/SideBar.jsx';
import { UserHeader } from '../components/UserHeader.jsx';

export function UserLayout() {
    return (
        <>
            <UserHeader />
            <div className="container-fluid">
                <div className="row">
                    <SideBar />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}