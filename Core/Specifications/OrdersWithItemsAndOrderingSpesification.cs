using Core.Entities.OrderAggregate;
using Core.Spesifications;

namespace Core.Specifications
{
    public class OrdersWithItemsAndOrderingSpesification : BaseSpecification<Order>
    {
        public OrdersWithItemsAndOrderingSpesification(string email) : base(o => o.BuyerEmail == email)
        {
            AddInclude(o => o.OrderItems);
            AddInclude(o => o.DeliveryMethod);
            AddOrderByDescending(o => o.OrderDate);
        }

        public OrdersWithItemsAndOrderingSpesification(int id, string email) : base(o => o.Id == id && o.BuyerEmail == email)
        {
            AddInclude(o => o.OrderItems);
            AddInclude(o => o.DeliveryMethod);
        }
    }
}