package main;

import java.util.List;
import java.util.Scanner;

import employeedao.EmployeeDao;
import employeedaoimp.EmployeeDaoImp;
import model.EmpPersonalDetails;
import model.Employee;
//class
public class MainClass {
    public static void main(String[] args) {
//object
        Scanner scanner = new Scanner(System.in);
        EmployeeDao dao = new EmployeeDaoImp();
        List<Employee> employeeList;
        Employee employee;
        EmpPersonalDetails ed=new EmpPersonalDetails();
        int id;
        String choice;
        String psw;
        String fname;
        String mail;
        double sal;
        String des;
        String rol;
        int nid;
        String name;
        
        do {
            System.out.println("Employee Management System");
            System.out.println("1. Create");
            System.out.println("2. Read All");
            System.out.println("3. Read by ID");
            System.out.println("4. Update");
            System.out.println("5. Delete");
            System.out.println("6. Read by name");
            System.out.println("Enter your choice: ");
            int ch = scanner.nextInt();

            switch (ch) {
                case 1:
                    employee = new Employee();
                    
                    System.out.println("Enter employee ID:");
                    employee.setId(scanner.nextInt());

                    System.out.println("Enter employee full name:");
                    fname=scanner.next();
                    employee.setFullname(fname);

                    System.out.println("Enter employee designation:");
                    des=scanner.next();
                    employee.setDesignation(des);

                    System.out.println("Enter employee salary:");
                    sal=scanner.nextDouble();
                    employee.setSalary(sal);

                    System.out.println("Enter employee role:");
                    rol=scanner.next();
                    employee.setRole(rol);

                    System.out.println("Enter employee email:");
                    mail=scanner.next();
                    employee.setEmail(mail);

                    System.out.println("Enter employee password:");
                    psw=scanner.next();
                    employee.setPw(psw);

                    System.out.println("Enter employee empid:");
                    nid=scanner.nextInt();
                    employee.setEmpid(nid);
                    
                    System.out.println("Enter employee age:");
                    ed.setAge(scanner.nextInt());
                    
                    System.out.println("Enter employee branch:");
                    ed.setBranch(scanner.next());
                    
                    System.out.println("Enter employee's annual Increament:");
                    ed.setIncreament(scanner.nextDouble());
                    ed.setEid(nid);
                    ed.setPw(psw);
                    ed.setDesignation(des);
                    ed.setEmail(mail);
                    ed.setSalary(sal);
                    ed.setFullname(fname);
                    ed.setRole(rol);
                    dao.create(employee);
                    dao.createDetails(ed);
                    break;

                case 2:
                    employeeList = dao.readAll();
                    for (Employee e : employeeList) {
                        System.out.println(e);
                    }
                    break;

                case 3:
                    System.out.println("Enter employee ID to read:");
                    id = scanner.nextInt();
                    employee = dao.read(id);
                    if (employee != null) {
                        System.out.println(employee);
                    } else {
                        System.out.println("Employee with ID " + id + " not found.");
                    }
                    break;

                case 4:
                    System.out.println("Enter employee ID to update:");
                    id = scanner.nextInt();
                    employee = dao.read(id);
                    if (employee != null) {
                        System.out.println("Enter updated employee full name:");
                        employee.setFullname(scanner.next());

                        System.out.println("Enter updated employee designation:");
                        employee.setDesignation(scanner.next());

                        System.out.println("Enter updated employee salary:");
                        employee.setSalary(scanner.nextDouble());

                        System.out.println("Enter updated employee role:");
                        employee.setRole(scanner.next());

                        System.out.println("Enter updated employee email:");
                        employee.setEmail(scanner.next());

                        System.out.println("Enter updated employee password:");
                        employee.setPw(scanner.next());

                        System.out.println("Enter updated employee empid:");
                        employee.setEmpid(scanner.nextInt());

                        dao.update(employee);
                    } else {
                        System.out.println("Employee with ID " + id + " not found.");
                    }
                    break;

                case 5:
                    System.out.println("Enter employee ID to delete:");
                    id = scanner.nextInt();
                    employee = dao.read(id);
                    if (employee != null) {
                        dao.delete(id);
                    } else {
                        System.out.println("Employee with ID " + id + " not found.");
                    }
                    break;
                case 6:
                    System.out.println("Enter employee's fullname to read:");
                    name = scanner.next();
                    employee = dao.read(name);
                    if (employee != null) {
                        System.out.println(employee);
                    } else {
                        System.out.println("Employee with ID " + name + " not found.");
                    }
                    break;
                default:
                    System.out.println("Invalid choice");
            }

            System.out.println("Do you want to continue (yes/no)?");
            choice = scanner.next();
        } while (choice.equalsIgnoreCase("yes"));

        scanner.close();
    }
}
