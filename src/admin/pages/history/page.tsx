import { theadItems } from '@/admin/static/history-orders-thead';
import HistoryTable from '@/components/ui/HistoryTable';
import { useGetHistoryMutation } from '@/redux/features/services/admin/adminService';
import { IOrder } from '@/types/interfaces';
import { handleSimpleError } from '@/utils/handleError';
import { subYears } from 'date-fns';
import { useEffect, useState } from 'react';

const HistoryOrdersPage = () => {
  const date = subYears(new Date(), 100);
  const isoStringWithoutTimezone = date.toISOString().slice(0, -1);

  const [getHistory, { isSuccess }] = useGetHistoryMutation();
  const [data, setData] = useState<IOrder[]>([]);

  useEffect(() => {
    (async function fetchData() {
      try {
        const data = await getHistory({
          start_datetime: isoStringWithoutTimezone,
          end_datetime: new Date().toISOString().slice(0, -1),
        }).unwrap();
        setData(data);
      } catch (err) {
        handleSimpleError(err);
      }
    })();
  }, []);

  return (
    <section className='my-[45px] pr-[32px]'>
      {isSuccess && <HistoryTable items={data} h_items={theadItems} isAdmin />}
    </section>
  );
};

export default HistoryOrdersPage;
