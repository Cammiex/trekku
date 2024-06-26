import { Tabs } from 'flowbite-react';
import PropTypes from 'prop-types';

const customTheme = {
  base: 'flex flex-col gap-2',
  tablist: {
    base: 'flex text-center',
    styles: {
      default: 'flex-wrap border-b border-gray-200 dark:border-gray-700',
      underline:
        '-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700',
      pills:
        'flex-wrap space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400',
      fullWidth:
        'grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400',
    },
    tabitem: {
      base:
        'flex items-center justify-center rounded-t-lg py-5 px-[41px] text-sm font-medium first:ml-0 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500',
      styles: {
        default: {
          base: 'rounded-t-lg',
          active: {
            on: 'bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500',
            off:
              'text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300',
          },
        },
        underline: {
          base: 'rounded-t-lg',
          active: {
            on:
              'active rounded-t-lg border-b-4 border-primary-60 text-primary-90 text-[20px] font-semibold',
            off:
              'border-b-2 border-transparent text-[20px] text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300',
          },
        },
        pills: {
          base: '',
          active: {
            on: 'rounded-lg bg-cyan-600 text-white',
            off:
              'rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white',
          },
        },
        fullWidth: {
          base: 'ml-0 flex w-full rounded-none first:ml-0',
          active: {
            on:
              'active rounded-none bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white',
            off:
              'rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white',
          },
        },
      },
      icon: 'mr-2 h-5 w-5',
    },
  },
  tabitemcontainer: {
    base: '',
    styles: {
      default: '',
      underline: '',
      pills: '',
      fullWidth: '',
    },
  },
  tabpanel: 'py-3',
};

const InformationSection = ({
  information,
  destination,
  facility,
  accommodation,
  preparation,
  schedule,
}) => {
  return (
    <section className="self-start w-[1240px] h-fit min-h-[385px] pt-2 rounded-2xl shadow-cardShadow">
      <Tabs
        aria-label="Tabs with underline"
        style="underline"
        theme={customTheme}
      >
        <Tabs.Item active title="Informasi">
          <div className="px-8 py-2">{information}</div>
        </Tabs.Item>
        <Tabs.Item active title="Destinasi">
          <div className="px-8 py-2">{destination}</div>
        </Tabs.Item>
        <Tabs.Item active title="Jadwal">
          <div className="px-8 py-2">{schedule}</div>
        </Tabs.Item>
        <Tabs.Item active title="Fasilitas">
          <div className="px-8 py-2">{facility}</div>
        </Tabs.Item>
        <Tabs.Item active title="Akomodasi">
          <div className="px-8 py-2">{accommodation}</div>
        </Tabs.Item>
        <Tabs.Item active title="Persiapan">
          <div className="px-8 py-2">{preparation}</div>
        </Tabs.Item>
      </Tabs>
    </section>
  );
};

InformationSection.propTypes = {
  information: PropTypes.string,
  destination: PropTypes.string,
  facility: PropTypes.string,
  accommodation: PropTypes.string,
  preparation: PropTypes.string,
  schedule: PropTypes.string,
};

export default InformationSection;
