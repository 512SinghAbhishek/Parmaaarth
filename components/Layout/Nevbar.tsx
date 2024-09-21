import React from 'react';
import Link from 'next/link';  // Import Link from next/link

function Nevbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className='Logo'>
                        <Link href="/">  {/* Use Link for internal navigation */}
                            <a>@Paramaarth</a>  {/* You can still use <a> inside Link */}
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nevbar;
