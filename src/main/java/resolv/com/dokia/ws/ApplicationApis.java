package resolv.com.dokia.ws;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@ApplicationPath("api")
public class ApplicationApis extends Application {
	
    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> classes = new HashSet<Class<?>>();
        classes.add(UserWS.class);
        classes.add(RuleWS.class);
        classes.add(CompanyWS.class);
        classes.add(DocumentWS.class);
        classes.add(WalletWS.class);
        classes.add(ProcessWS.class);
        classes.add(ExpenseWS.class);
        classes.add(LotWS.class);
        return classes;
    }
}