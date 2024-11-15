import { Disclosure } from '@headlessui/react';
import { Link } from 'react-scroll';

const navigation = [
  { name: 'Home', to: 'home' },
  { name: 'Projects', to: 'project' },
  { name: 'Testimonial', to: 'testimonial' },
  { name: 'About', to: 'about' },
  { name: 'Contact', to: 'contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-opacity-20 md:w-[420px] sm:w-[380px] mx-auto rounded-full bg-white border-black border-opacity-5 border-2 mt-4 flex justify-center fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl sm:px-4 lg:px-4">
        <div className="relative flex items-center h-8 ">
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start lg:justify-center">
            <div className="sm:block">
              <div className="flex -space-x-3 cursor-pointer sm:-space-x-3 md:space-x-0 lg:space-x-0">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      'rounded-full px-4 py-1 text-sm font-medium',
                      'hover:bg-gray-700 hover:text-white',
                      'text-gray-300',
                      item.current ? 'text-gray-900 bg-white font-bold' : ''
                    )}
                    activeClass="bg-white text-gray-900 font-bold"  // Active state for the link
                    spy={true}
                    smooth={true}
                    offset={50} // Adjust to fit your navbar height
                    duration={300}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
