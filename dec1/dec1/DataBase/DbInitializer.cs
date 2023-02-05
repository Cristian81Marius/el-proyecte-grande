namespace dec1.DataBase
{
    public class DbInitializer
    {
        public static void Initialize(ProjectContext context)
        {
            context.Database.EnsureCreated();

            /*if (context.Services.Any())
            {
                return;   // DB has been seeded
            }

            var services = new Services[]
            {
            new Services{Name="Minute Nelimitate",ServicesOffereds = ServicesOffered.Voce,
                Price=22 ,ExpierDate=DateTime.Parse("2023-12-10")},
            new Services{Name="Internet 5G",ServicesOffereds = ServicesOffered.Internet,
                Price=40 ,ExpierDate=null}
            };
            foreach (Services s in services)
            {
                context.Services.Add(s);
            }
            context.SaveChanges();

            var subscription = new Subscription[]
            {
            new Subscription{Tip="Oferta",Price = 13, IsPaid=true, DateActivation=DateTime.Now, ServicesID=1},
            new Subscription{Tip="Standard",Price = 23, IsPaid=false, DateActivation=DateTime.Now, ServicesID=2},
            };
            foreach (Subscription s in subscription)
            {
                context.Subscription.Add(s);
            }
            context.SaveChanges();

            var client = new Client[]
            {
            new Client{Cod="31",Name="Oana_Raluca_Alexandra",Addres="Dristor Bloc 12",PhoneNumber="0711151115", FinancialState=FinancialState.Zi},
            new Client{Cod="12",Name="Ion Ana",Addres="Dumbravii 2",PhoneNumber="075463123", FinancialState=FinancialState.Restanta},
            new Client{Cod="43",Name="Ion Maria",Addres="Suitului 11",PhoneNumber="0238464356", FinancialState=FinancialState.Intarziat},
            };
            foreach (Client c in client)
            {
                context.Client.Add(c);
            }
            context.SaveChanges();*/
        }
    }
}
