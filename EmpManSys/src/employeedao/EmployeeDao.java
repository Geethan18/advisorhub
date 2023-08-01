package employeedao;

import java.util.List;

import model.EmpPersonalDetails;
import model.Employee;

//interface
public interface EmployeeDao {
    void create(Employee employee);

    List<Employee> readAll();
//abstraction
    abstract Employee read(int id);
//polymorphism
    abstract Employee read(String fullname);
    void update(Employee employee);

    void delete(int id);
    void createDetails(EmpPersonalDetails ed);
}
